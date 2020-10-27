import React, { useState, useEffect } from 'react'
import { FlatList, ListRenderItem, Modal, Alert } from 'react-native';

import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import Button from '../../components/Button'
import { Item, ItemProps } from '../../components/Item'
import { Container, EmptyContainer, EmptyText, Wrapper, TextArea, Blur, CancelButton, CancelText } from './styles'

import db from '../../services/database'

export default function List() { 

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    readItems();
  }, []);

  const createItem = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO items (content, checked) values (?, ?)', [inputValue, false], (_, item) => {
        setData(data.concat({ 
          id: item.insertId, 
          content: inputValue, 
          checked: false 
        }));

        readItems();
      });
    });
  }
  
  const readItems = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM items', [], (_, response) => {
        setData(response.rows._array);
        setLoading(false);
      });
    });
  }

  const updateItem = (checked: boolean, id: number) => {
    db.transaction(tx => {
      tx.executeSql('UPDATE items SET checked = ? WHERE id = ?', [checked, id], (_, response) => console.log('OK'));
    });
  }

  const deleteItem = (id: number) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM items WHERE id = ?', [id], (_, response) => console.log('OK'));
    });
  }

  function isBlank(str: string) {
    return (!str || /^\s*$/.test(str));
  }

  function isEmpty(str: string) {
    return (str.length === 0 || !str.trim());
  }

  const handleSave = () => {
    if (isEmpty(inputValue) || isBlank(inputValue)) {
      Alert.alert('Espere.', 'Você não pode adicionar uma nota vazia!');
      
    } else {
      createItem();
      setInputValue('');
      setIsModalVisible(false);
    }
  }

  const removeItem = (id: string) => {
    deleteItem(id);

    const newData = data.filter(item => item.id !== id);

    setData(newData);
  }

  const checkItem = (id: string) => {
    const newData = data.map(item => {
      if (item.id === id){
        updateItem(!item.checked, item.id)

        return { ...item, checked: !item.checked } 
      } else  {
        return item
      }
    });

    setData(newData);
  }

  const renderItem: ListRenderItem<ItemProps> = ({ item }) => (
    <Item 
      id={item.id}
      content={item.content} 
      checked={item.checked} 
      onCheck={() => checkItem(item.id)} 
      onDelete={() => removeItem(item.id)} 
    />
  )

  return (
    <Container>

      <Header />
      
      <Button onPress={() => setIsModalVisible(true)}>nova +</Button>

      { data.length > 0 && (
        <FlatList 
          data={data}
          renderItem={renderItem} 
          keyExtractor={item => item.id}
        />
      ) }

      { data.length === 0 && loading === false && (
        <EmptyContainer>
          <Feather name="info" size={40} color="#999" />
          <EmptyText>Suas notas estão vazias.</EmptyText>
        </EmptyContainer>
      ) }

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
      >
        <Blur />

        <Wrapper>
          <TextArea
            multiline={true}
            numberOfLines={4}
            value={inputValue}
            onChangeText={e => setInputValue(e)}
          />

          <CancelButton onPress={()=> setIsModalVisible(false)}>
            <CancelText>cancelar</CancelText>
          </CancelButton>

          <Button onPress={()=> handleSave()}>salvar</Button>
        </Wrapper>

      </Modal>
      
    </Container>
  );
}
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, TextInput, FlatList, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {getDatas} from '../../api';
import {MovieType} from '../../../types/MovieType';
import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native';

const Search = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    getDatas({
      setData: setSearchResult,
      setLoading,
      url: `/search/movie?query=${search}`,
    });
  };

  useEffect(() => {
    setLoading(false);
  }, [searchResult]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
        }}
        placeholder="Search"
        onChangeText={text => setSearch(text)}
        defaultValue={search}
        onSubmitEditing={() => handleSearch()}
      />
      {!loading ? (
        <FlatList
          data={searchResult}
          renderItem={({item}: {item: MovieType}) => (
            <TouchableOpacity
              style={styles.col}
              onPress={() =>
                navigation.navigate('MovieDetail', {
                  id: item.id,
                })
              }>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                }}
                style={{
                  width: 180,
                  height: 250,
                  marginTop: 10,
                  borderRadius: 10,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      ) : (
        <View>
          <ActivityIndicator size="large" color="#0000ff" style={{flex: 1}} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    width: '50%',
    padding: 5,
  },
});

export default Search;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {getDatas} from '../../api';
import {MovieType} from '../../../types/MovieType';

const UpComing = ({navigation}: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDatas({
      setData,
      setLoading,
      url: '/movie/upcoming',
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {!loading ? (
          <FlatList
            data={data}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  row: {
    display: 'flex',
  },
  col: {
    flex: 50,
    alignItems: 'center',
  },
});

export default UpComing;

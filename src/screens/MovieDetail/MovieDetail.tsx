/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {getDatas, getMovieDetail} from '../../api';

import {MovieDetailType} from '../../../types/MovieDetailType';
import {MovieSimilarType} from '../../../types/MovieSimiliarType';
import {ActivityIndicator} from 'react-native';
import {MovieType} from '../../../types/MovieType';

const MovieDetail = ({
  navigation,
  route: {
    params: {id},
  },
}: any) => {
  let movieId = id;
  const [dataDetail, setDataDetail] = useState<MovieDetailType>();
  const [loadingDetail, setLoadingDetail] = useState(true);

  const [data, setData] = useState<MovieSimilarType[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieDetail({
      setData: setDataDetail,
      setLoading: setLoadingDetail,
      url: `/movie/${movieId}`,
    });
    getDatas({
      setData,
      setLoading,
      url: `/movie/${movieId}/similar`,
    });
  }, [movieId]);

  return (
    <ScrollView>
      {!loadingDetail ? (
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${dataDetail?.poster_path}`,
            }}
            resizeMode="stretch"
            style={{width: '100%', height: 250}}
          />
          <Text style={styles.title}>{dataDetail?.original_title}</Text>
          <View style={styles.row}>
            <View>
              <Text style={styles.titleInfo}>en</Text>
              <Text>{dataDetail?.original_language}</Text>
            </View>
            <View>
              <Text style={styles.titleInfo}>
                {dataDetail?.vote_average ? dataDetail?.vote_average : 0}
              </Text>
              <Text>Rating</Text>
            </View>
            <View>
              <Text style={styles.titleInfo}>
                {dataDetail?.runtime ? dataDetail?.runtime : 0} min
              </Text>
              <Text>Duration</Text>
            </View>
            <View>
              <Text style={styles.titleInfo}>
                {dataDetail?.release_date ? dataDetail?.release_date : 'N/A'}
              </Text>
              <Text>Release Date</Text>
            </View>
          </View>
          <Text style={styles.title}>Description</Text>
          <Text style={{paddingHorizontal: 10}}>{dataDetail?.overview}</Text>
          <Text style={styles.title}>Similiar</Text>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#0000ff" style={{flex: 1}} />
        </View>
      )}
      <View style={styles.row}>
        {!loading ? (
          <FlatList
            data={data}
            renderItem={({item}: {item: MovieType}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MovieDetail', {
                    id: item.id,
                  })
                }>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                  }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            horizontal
          />
        ) : (
          <View>
            <ActivityIndicator size="large" color="#0000ff" style={{flex: 1}} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  titleInfo: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 180,
    height: 250,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default MovieDetail;

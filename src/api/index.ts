import axios from 'axios';

// Create an axios instance
const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
});

// get all data from api
const getDatas = async ({
  setData,
  setLoading,
  url,
}: {
  setData: (data: any) => void;
  setLoading: (loading: boolean) => void;
  url: string;
}) => {
  try {
    const res = await client.get(url, {
      headers: {Accept: 'application/json'},
      params: {api_key: 'a3757f854014427d94cc506e4b7126ad'},
    });
    setData(res.data.results);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

// get movie detail from api
const getMovieDetail = async ({
  setData,
  setLoading,
  url,
}: {
  setData: (data: any) => void;
  setLoading: (loading: boolean) => void;
  url: string;
}) => {
  try {
    const res = await client.get(url, {
      headers: {Accept: 'application/json'},
      params: {api_key: 'a3757f854014427d94cc506e4b7126ad'},
    });
    setData(res.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

// get movie data search from api
const getMovieSearch = async ({
  setData,
  setLoading,
  url,
  movieName,
}: {
  setData: (data: any) => void;
  setLoading: (loading: boolean) => void;
  url: string;
  movieName: string;
}) => {
  try {
    const res = await client.get(url + movieName, {
      headers: {Accept: 'application/json'},
      params: {api_key: 'a3757f854014427d94cc506e4b7126ad'},
    });
    console.log(res.data.results);
    setData(res.data.results);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

export {getDatas, getMovieDetail, getMovieSearch};

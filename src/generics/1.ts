import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface ExampleData {
  id: number;
  name: string;
}

fetchData<ExampleData>('https://api.example.com/data')
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error(error);
  });
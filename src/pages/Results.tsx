import { useParams } from 'react-router-dom';

const Results = () => {
  const { id } = useParams();
  return <h1>Results {id}</h1>;
};

export default Results;

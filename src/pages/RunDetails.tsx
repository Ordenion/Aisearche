import { useParams } from 'react-router-dom';

const RunDetails = () => {
  const { id } = useParams();
  return <h1>Run {id}</h1>;
};

export default RunDetails;

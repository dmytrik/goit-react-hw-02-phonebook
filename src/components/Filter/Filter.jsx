import { Input } from 'components/Form/Form.styled';
import { P } from './Filter.styled';

export default function Filter({ searchByName }) {
  return (
    <>
      <P>Find contacts by name</P>
      <Input type="text" onChange={searchByName}></Input>
    </>
  );
}

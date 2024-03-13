import Form from './Form/Form';
import ListContact from './ListContact/ListContact';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form />

      <Filter />
      <ListContact />
    </div>
  );
};
export default App;

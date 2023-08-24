import { Button, ButtonProps } from './components/button';

function App() {
  return <Button>**</Button>;
}

export default App;

//? Error: Type '{}' is missing the following properties from type 'ButtonProps': className, children -> typescript te va diciendo lo que se le tiene que pasar. Si ponemos en interfaces className? esta ? quiere decir que es opcional y así no te obliga a poner esta prop y te fallará.
//? El children sería poniendo entre el  return <Button></Button>; un hola por ejemplo:  return <Button>Hola</Button>;

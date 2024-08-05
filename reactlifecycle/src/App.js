import Car from './lifecycle/Car';
import InsideComponent from './lifecycle/InsideComponent';
import GetDerivedStateFromProps from './lifecycle/GetDerivedStateFromProps';
import ComponentDidMount from './updatephase/UpdatedGetDerivedStateFromProps';
import UpdatedGetDerivedStateFromProps from './updatephase/UpdatedGetDerivedStateFromProps';
import ShouldComponentUpdate from './updatephase/ShouldComponentUpdate';
import GetSnapshotBeforeUpdate from './updatephase/GetSnapshotBeforeUpdate';
import Container from './unmounting/Container';
import Lifecycle from './all/Lifecycle';
import Demo from './converting/Demo';
import ReduxDemo from './components/ReactDemo'
import Product from './components/Product';
import Todo from './components/Todo';
function App() {
  return (
    <>
    {/* <Car color = "red"/> */}
    {/* <InsideComponent/> */}
    {/* <GetDerivedStateFromProps fav = "yellow"/> */}
    {/* <ComponentDidMount/> */}
    {/* <UpdatedGetDerivedStateFromProps color = "yellow"/> */}
    {/* <ShouldComponentUpdate/> */}
    {/* <GetSnapshotBeforeUpdate/> */}
    {/* <Container/> */}
    {/* <Lifecycle color = "yellow"/> */}
    {/* <Demo/> */}
    {/* <ReduxDemo/> */}
    {/* <Product/> */}
    <Todo />
    </>
  );
}

export default App;

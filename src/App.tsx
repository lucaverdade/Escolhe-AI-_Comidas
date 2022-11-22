import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import FormularioRestaurentes from './paginas/Administracao/Restaurantes/FormularioRestaurantes';
import PaginaBaseAdmin from './paginas/Administracao/Restaurantes/PaginaBaseAdmin';
import AdministracaoRestaurantes from './paginas/Administracao/Restaurantes/AdministracaoRestaurantes';
import AdministracaoPratos from './paginas/Administracao/Pratos/AdministracaoPratos';
import FormularioPrato from './paginas/Administracao/Pratos/FormularioPrato';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path='/admin' element={<PaginaBaseAdmin />}>

      <Route path="/admin/restaurantes" element={<AdministracaoRestaurantes/>} />
      <Route path="/admin/restaurantes/novo" element={<FormularioRestaurentes/>} />
      <Route path="/admin/restaurantes/:id" element={<FormularioRestaurentes/>} />
      <Route path="/admin/pratos" element={<AdministracaoPratos/>} />
      <Route path="/admin/pratos/novo" element={<FormularioPrato/>} />

      </Route>
     

    </Routes>
  );
}
export default App;

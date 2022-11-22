
import { TableBody, TableCell, TableRow, TableHead, Paper, Table, TableContainer, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../../http";
import IRestaurante from "../../../interfaces/IRestaurante";

const AdministracaoRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        http.get<IRestaurante[]>('restaurantes/')
        .then(resposta => setRestaurantes(resposta.data))
    },
    [])
     


    const excluir = (restaurenteAhSerExcluido: IRestaurante) => {
    axios.delete(`https://escolheaicomidas.vercel.app/restaurantes/${restaurenteAhSerExcluido.id}/`)
    .then(() => {
        const listaRestaurante = restaurantes.filter(restaurante => restaurante.id !== restaurenteAhSerExcluido.id)
        setRestaurantes([...listaRestaurante])
    }
    )
    }


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante => <TableRow key={restaurante.id}>
                        <TableCell>
                            {restaurante.nome}
                        </TableCell>
                        <TableCell>
                            [ <Link to={`/admin/restaurantes/${restaurante.id}`}>editar</Link> ]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>

        </TableContainer>
    )


}

export default AdministracaoRestaurantes;
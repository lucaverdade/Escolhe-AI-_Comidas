import { TableBody, TableCell, TableRow, TableHead, Paper, Table, TableContainer } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";

const AdministracaoRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
        .then(resposta => setRestaurantes(resposta.data))
    },
    [])



    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurantes => <TableRow key={restaurantes.id}>
                        <TableCell>
                            {restaurantes.nome}
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>

        </TableContainer>
    )


}

export default AdministracaoRestaurantes;
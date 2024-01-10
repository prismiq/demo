import { Button, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";


export default function AboutPage() {
    return (
        <Container>
            <Typography variant="h2">
            Errors for testing
            </Typography>
            <Button variant='contained' onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>400 Error</Button>
            <Button variant='contained' onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>401 Error</Button>
            <Button variant='contained' onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>500 Error</Button>
            <Button variant='contained' onClick={() => agent.TestErrors.getValidationError().catch(error => console.log(error))}>Validation Error</Button>
        </Container>
    )
}
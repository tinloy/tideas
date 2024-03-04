import { Button, Container, Dialog, DialogContent, Divider, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        industry: "",
        messageBody: "",
    });
    const [dialogStatus, setDialogStatus] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");

    const logMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.currentTarget.name) {
            case "firstName":
                setMessage({ ...message, firstName: event.currentTarget.value });
                break;
            case "lastName":
                setMessage({ ...message, lastName: event.currentTarget.value });
                break;
            case "email":
                setMessage({ ...message, email: event.currentTarget.value });
                break;
            case "company":
                setMessage({ ...message, company: event.currentTarget.value });
                break;
            case "role":
                setMessage({ ...message, role: event.currentTarget.value });
                break;
            case "industry":
                setMessage({ ...message, industry: event.currentTarget.value });
                break;
            case "messageBody":
                setMessage({ ...message, messageBody: event.currentTarget.value });
                break;
            default:
                break;
        }
    };

    const sendMessage = async () => {
        if (!message.firstName) {
            setDialogStatus(true);
            setDialogMessage("Please enter your first name");
            return;
        } else if (!message.lastName) {
            setDialogStatus(true);
            setDialogMessage("Please enter your last name");
            return;
        } else if (!message.email) {
            setDialogStatus(true);
            setDialogMessage("Please enter your email address");
            return;
        } else if (!message.messageBody) {
            setDialogStatus(true);
            setDialogMessage("Please enter your message");
            return;
        } else {
            setDialogMessage("");
        }
        const emailContent = `Hi Tinloy,<br/><br/>${message.firstName} ${message.lastName} from ${message.company} sent you a message through <b>Tinloy Design Studio</b><br /><br /><b>Role:</b> ${message.role}<br/><br/><b>Industry:</b> ${message.industry}<br/><br/><b>Message:</b> ${message.messageBody}`;

        try {
            await axios.post("/api/sendMessage", {
                senderEmail: "tinloy.w@gmail.com",
                message: emailContent,
            });
        } catch (e) {
            console.log(e);
        }

        setDialogStatus(true);
        setDialogMessage("Thank you for your message, we will be in touch shortly.");
    };

    return (
        <Box component={"div"}>
            <Divider sx={{ mt: 8, mb: 8 }} />
            <Container maxWidth={"xl"} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant='h1' gutterBottom>
                    Let&apos;s talk
                </Typography>
                <Container maxWidth={"md"}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <TextField
                                name='firstName'
                                required
                                label='First name'
                                variant='standard'
                                fullWidth
                                value={message.firstName}
                                onChange={logMessage}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name='lastName'
                                required
                                label='Last name'
                                variant='standard'
                                fullWidth
                                value={message.lastName}
                                onChange={logMessage}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name='email'
                                required
                                label='Email'
                                variant='standard'
                                fullWidth
                                value={message.email}
                                onChange={logMessage}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name='company'
                                required
                                label='Company'
                                variant='standard'
                                fullWidth
                                value={message.company}
                                onChange={logMessage}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name='role'
                                label='Your role'
                                variant='standard'
                                fullWidth
                                value={message.role}
                                onChange={logMessage}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name='industry'
                                label='Your industry'
                                variant='standard'
                                fullWidth
                                value={message.industry}
                                onChange={logMessage}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='messageBody'
                                label='Message'
                                rows={6}
                                multiline
                                fullWidth
                                value={message.messageBody}
                                onChange={logMessage}
                                required
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Button variant='contained' sx={{ mt: 4 }} onClick={sendMessage}>
                    Send Message
                </Button>
            </Container>
            <Dialog onClose={() => setDialogStatus(false)} open={dialogStatus}>
                <DialogContent>{dialogMessage}</DialogContent>
            </Dialog>
        </Box>
    );
}

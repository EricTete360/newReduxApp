import React from 'react';
import { Tabs,TabList,Tab,TabPanel,TabPanels,HStack,Box,Container,Grid, GridItem } from "@chakra-ui/react";
import SignUpForm from '../components/SignUp';
import SignInForm from '../components/SignIn';

const Account = () => {
    return (
        <>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem colSpan={2} h="10"> 
                <HStack padding={12}>
                    <Container maxW="container.md">
                        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Tabs isFitted >

                                <TabList mb="1em">
                                    <Tab>Signup</Tab>
                                    <Tab>Signin</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel>
                                        <SignUpForm />
                                    {/* <p>one!</p> */}
                                    </TabPanel>
                                    <TabPanel>
                                        <SignInForm /> 
                                    {/* <p>two!</p> */}
                                    </TabPanel>
                                </TabPanels>

                            </Tabs>
                        </Box>
                    </Container>
                </HStack>
            </GridItem>
            <GridItem colStart={4} colEnd={6} h="10">

            </GridItem>
        </Grid>

        </>
    )
}

export default Account

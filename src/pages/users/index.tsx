import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/SideBar";



export default function UserList () {
    return (
        <Box>
            <Header/>
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        <Button 
                        as='a' 
                        size='sm' 
                        fontSize='small' 
                        colorScheme='pink'
                        leftIcon={
                            <Icon as={RiAddLine} fontSize='20'/>
                        }
                        >Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' w='8'>
                                    <Checkbox colorScheme='pink'/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr px='6'>
                                <Td><Checkbox colorScheme='pink'/></Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Augusto Cezar</Text>
                                        <Text color='gray.300' fontSize='sm'>augustocezaa@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    04 de abril 2021
                                </Td>
                                <Td>
                                    <Button 
                                    as='a' 
                                    size='sm' 
                                    fontSize='small' 
                                    colorScheme='purple'
                                    leftIcon={
                                        <Icon as={RiPencilLine} fontSize='16'/>
                                    }
                                    >Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    );
}
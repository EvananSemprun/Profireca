import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch, IconBrandInstagram, IconShoppingCart, IconBrandWhatsapp, IconBrandFacebook } from '@tabler/icons-react';
import { Card, Text, Group, TextInput, HoverCard, Divider, ActionIcon, useMantineTheme, Title, Burger, Drawer, Grid } from '@mantine/core';

function Navbar() {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery('(min-width: 1000px)');
    const [opened, setOpened] = useState(false);

    return (
        <>
            <div
                style={{
                    width: '100%'
                }}>

                {!isMobile && (
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={opened ? 'Close navigation' : 'Open navigation'}
                    />
                )}

                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Navigation"
                    padding="xl"
                    size="lg"
                    position="left"
                    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                    overlayOpacity={0.55}
                    overlayBlur={3}
                >
                    <div>
                        <p>Content of the Drawer</p>
                    </div>
                </Drawer>
                <Group position={isMobile ? "apart" : "center"} style={{ flexDirection: isMobile ? "row" : "column", width: "100%" }}>
                    <Title ml={15} order={1} align={isMobile ? "left" : "center"}>Logo</Title>

                    <Group mr={15} spacing="lg" position={isMobile ? "apart" : "center"}>
                        <ActionIcon radius="xl">
                            <IconBrandInstagram color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconBrandWhatsapp color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconBrandFacebook color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconShoppingCart color="red" size={34} />
                        </ActionIcon>

                    </Group>
                </Group>
                <Divider my="sm" mx='sm' />
                <Group position={isMobile ? 'apart' : 'center'} style={{ flexDirection: isMobile ? 'row' : 'column', width: '100%' }}>


                    {isMobile && (
                        <>
                            <Group ml={15} spacing="xl" position="apart">
                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                            >
                                                Texto
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Grid grow>
                                                {Array.from({ length: 10 }).map((_, index) => (
                                                    <Grid.Col key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
                                                        <Card shadow="sm" radius="md" withBorder>
                                                            <Card.Section>
                                                                <h4>Card</h4>
                                                            </Card.Section>
                                                        </Card>
                                                    </Grid.Col>
                                                ))}
                                            </Grid>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>

                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                            >
                                                Texto
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Grid grow>
                                                {Array.from({ length: 10 }).map((_, index) => (
                                                    <Grid.Col key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
                                                        <Card shadow="sm" radius="md" withBorder>
                                                            <Card.Section>
                                                                <h4>Card</h4>
                                                            </Card.Section>
                                                        </Card>
                                                    </Grid.Col>
                                                ))}
                                            </Grid>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>

                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                            >
                                                Texto
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Grid grow>
                                                {Array.from({ length: 10 }).map((_, index) => (
                                                    <Grid.Col key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
                                                        <Card shadow="sm" radius="md" withBorder>
                                                            <Card.Section>
                                                                <h4>Card</h4>
                                                            </Card.Section>
                                                        </Card>
                                                    </Grid.Col>
                                                ))}
                                            </Grid>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                            </Group>
                            <TextInput
                                placeholder="Buscar...."
                                radius="lg"
                                width='50%'
                                size="lg"
                                mr={15}
                                icon={<IconSearch size={14} />}
                            />
                        </>
                    )}
                </Group>
                <Divider my="sm" mx='sm' />

            </div>
        </>
    );
}

export default Navbar;
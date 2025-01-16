import { useState } from "react";
import { useMediaQuery } from '@mantine/hooks';
import { Drawer as MantineDrawer, Burger, Text, Center, Container } from '@mantine/core';

function Drawer() {
    const [opened, setOpened] = useState(false);
    const isMobile = useMediaQuery('(min-width: 1000px)');


    return (
        <>
            {!isMobile && (
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    title={opened ? 'Close navigation' : 'Open navigation'}
                />
            )}

            <MantineDrawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size="lg"
                position="left"
                overlayOpacity={0.55}
                overlayBlur={3}
            >
        <Container mt={15} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
            <div>
                <Text mt={15} fw={700}>
                    Texto
                </Text>
                <Text mt={15} fw={700}>
                    Texto
                </Text>
                <Text mt={15} fw={700}>
                    Texto
                </Text>
                <Text mt={15} fw={700}>
                    Texto
                </Text>
            </div>
        </Container>
            </MantineDrawer>
        </>
    );
}

export default Drawer;

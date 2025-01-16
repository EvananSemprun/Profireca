import { useState } from 'react';
import { Breadcrumbs, Anchor, Text, Box, NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Catalogo() {
    const [active, setActive] = useState(0);

    const items = [
        { title: 'Inicio', href: '/Profireca' },
        { title: 'Catalogo', href: '/Profireca/Catalogo' },
    ].map((item, index) => (
        <Anchor c='black' href={item.href} key={index}>
            <Text c='black' fw={700}>
                {item.title}
            </Text>
        </Anchor>
    ));

    return (
        <>
            <Breadcrumbs mt={15} ml={15}>{items}</Breadcrumbs>

            <Box mt={15} ml={2} sx={{ width: 240 }}>
                <NavLink
                    label="Text"
                    icon={<IconGauge size={16} stroke={1.5} />}
                    childrenOffset={28}
                    active={active === 0}
                    onClick={() => setActive(0)}
                    color={active === 0 ? "red" : "black"}
                >
                    <NavLink label="First child link" />
                    <NavLink label="Second child link" />
                </NavLink>

                <NavLink
                    label="Text"
                    icon={<IconFingerprint size={16} stroke={1.5} />}
                    childrenOffset={28}
                    active={active === 1}
                    onClick={() => setActive(1)}
                    color={active === 1 ? "red" : "black"}
                >
                    <NavLink label="First child link" />
                    <NavLink label="Second child link" />
                    <NavLink label="Third child link" />
                </NavLink>
            </Box>
        </>
    );
}

export default Catalogo;

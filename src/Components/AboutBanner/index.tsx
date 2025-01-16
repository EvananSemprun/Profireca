import { BackgroundImage, Text, Box } from '@mantine/core';

function AboutBanner() {
    return (
        <>
            <div style={{ height: 'auto', display: 'flex' }}>
                <BackgroundImage
                    mt={45}
                    mb={45}
                    src="https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg"
                    radius="xs"
                    sx={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover', 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0 20px',
                        backgroundPosition: 'center', 
                    }}
                >
                    <Text
                        color="#fff"
                        style={{
                            textAlign: 'center',
                            fontSize: 'clamp(1rem, 5vw, 2rem)', 
                            maxWidth: '80%',
                        }}
                    >
                        Texto
                    </Text>
                </BackgroundImage>
            </div>
        </>
    );
}

export default AboutBanner;

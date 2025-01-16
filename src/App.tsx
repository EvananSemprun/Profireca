import './App.css';
import Navbar from './Components/Navbar';
import { Image, Tabs } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import Productsmain from './Components/Productsmain';

function App() {
  
  return (
    <>
      <Navbar />

      <div style={{ height: 'auto', display: 'flex' }}>
        <Carousel
          mt={25}
          sx={{ width: '100%' }}
          withIndicators
          loop
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: 'width 250ms ease',
              '&[data-active]': {
                width: 40,
              },
            },
          }}
        >
          <Carousel.Slide>
            <Image
              height="auto"
              width="100%"
              fit="cover"
              src="https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg"
              alt="With default placeholder"
              withPlaceholder
              className="carousel-image"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              height="auto"
              width="100%"
              fit="cover"
              src="https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg"
              alt="With default placeholder"
              withPlaceholder
              className="carousel-image"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              height="auto"
              width="100%"
              fit="cover"
              src="https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg"
              alt="With default placeholder"
              withPlaceholder
              className="carousel-image"
            />
          </Carousel.Slide>
        </Carousel>
      </div>

      <Tabs my='auto' mt={25} color="red" radius="md" defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>Texto</Tabs.Tab>
          <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>Texto</Tabs.Tab>
          <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>Texto</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs" key="gallery">
          <Productsmain key="gallery" />
        </Tabs.Panel>
        <Tabs.Panel value="messages" pt="xs" key="messages">
          <Productsmain key="messages" />
        </Tabs.Panel>
        <Tabs.Panel value="settings" pt="xs" key="settings">
          <Productsmain key="settings" />
        </Tabs.Panel>

      </Tabs>
    </>
  );
}

export default App;
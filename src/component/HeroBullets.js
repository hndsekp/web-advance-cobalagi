import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '@/assets/rologo.jpg';
import classes from '@/styles/HeroBullets.module.css';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>vintage</span> Game <br /> in the history
          </Title>
          <Text c="dimmed" mt="md">
          Ragnarok Online adalah sebuah MMORPG dari Korea Selatan yang dirancang berdasarkan cerita
          dan latar belakang yang sama dari komik korea terkenal berjudul "Ragnarok" yang ditulis oleh
          Lee Myoung-Jin. Komik ini kemudian dikembangkan menjadi sebuah game online yang memfokuskan
          fitur komunitas antar pemainnya.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Multi Platform</b> – Bisa dimainkan melalui Emulator,PC Client,Android,
              dan Ios.
            </List.Item>
            <List.Item>
              <b>Big Community</b> – Memiliki komunitas hampir diseluruh dunia seperti Taiwan,
              Korea Selatan,Amerika (NA),serta Asia Tenggara.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
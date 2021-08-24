import Image from 'next/image'
import Layout from '../../layouts/_app'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { Button , Box, Container } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '75%',
    margin: '40px auto',
  }
})

export default function Home() {
  const classes = useStyles()
  return (
    <div>
        <Layout title="Detail Blog">
          <Container className={classes.root}>
            <h1>
              Judul Blog
            </h1>
            <h4>Sabtu , 23 Agustus 2021</h4>
            
            <Box>
              <Image src="/blogs/thumbnail.jpg" alt="Thumbnail blog" layout="responsive" width={100} height={50} />
            </Box>
            <Box>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, autem quia, in nobis placeat asperiores voluptas deleniti ullam repudiandae aperiam ducimus vero laboriosam molestias facere libero corrupti. Consequatur, sit dolorem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, autem quia, in nobis placeat asperiores voluptas deleniti ullam repudiandae aperiam ducimus vero laboriosam molestias facere libero corrupti. Consequatur, sit dolorem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, autem quia, in nobis placeat asperiores voluptas deleniti ullam repudiandae aperiam ducimus vero laboriosam molestias facere libero corrupti. Consequatur, sit dolorem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, autem quia, in nobis placeat asperiores voluptas deleniti ullam repudiandae aperiam ducimus vero laboriosam molestias facere libero corrupti. Consequatur, sit dolorem!</p>
            </Box>

            <Link href="/" >
              <Button variant="contained" color="primary">
                Back Home
              </Button>
            </Link>
          </Container>

        </Layout>

    </div>
  )
}

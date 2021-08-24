import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layouts/_app'
import styles from '../styles/Home.module.css'
import AppBar from '../comps/home/appbar'
import Blog from '../comps/home/blog'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    margin: '50px auto'
  },
  item: {
    margin: '25px auto'
  }
})

export default function Home() {
  const classes = useStyles()
  return (
    <Layout title="Latif's Blogs">

      <Container className={classes.root}>

        
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Blogs!</a>
        </h1>


        <Grid container justifyContent="center" spacing={1} >
          <Grid item lg={4} className={classes.item} >
            <Blog />
          </Grid>
          <Grid item lg={4} className={classes.item} >
            <Blog />
          </Grid>
          <Grid item lg={4} className={classes.item} >
            <Blog />
          </Grid>
          <Grid item lg={4} className={classes.item} >
            <Blog />
          </Grid>
          <Grid item lg={4} className={classes.item} >
            <Blog />
          </Grid>
          <Grid item lg={4} className={classes.item} >
            <Blog />
          </Grid>
        </Grid>

        
      </Container>

    </Layout>
  )
}

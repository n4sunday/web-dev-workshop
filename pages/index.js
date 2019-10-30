import Nav from '../components/nav'
const HomePage = () => {
  return (
    <div>
      <Nav />
      Home
      <style jsx global>{`
        @font-face {
          font-family: Roboto;
          src: url(/static/font/Roboto-Regular.ttf);
          font-weight: 600;
        }
        body {
          font-family: 'Roboto';
        }
      `}</style>
    </div>
  )
}

export default HomePage
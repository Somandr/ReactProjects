import {
  container,
  title,
  main,
  mainRaised
} from "assets/jss/material-kit-pro-react.jsx";

const blogPostsPageStyle = {
    container: {
        ...container,
        zIndex: '2',
        position: 'relative',
    },
    textCenter: {
        textAlign: 'center',
    },
    title: {
        ...title,
        color: '#FFFFFF',
    },
    main: {
        ...main,
        ...mainRaised,
  },
  opacity: {
      opacity: .7,
    },
    block: {
        color: 'inherit',
        padding: '0.9375rem',
        fontWeight: '500',
        fontSize: '12px',
        textTransform: 'uppercase',
        borderRadius: '3px',
        textDecoration: 'none',
        position: 'relative',
        display: 'block',
    },
    inlineBlock: {
        display: 'inline-block',
        padding: '0px',
        width: 'auto',
    },
    list: {
        marginBottom: '0',
        padding: '0',
        marginTop: '0',
    },
    left: {
        float: 'left!important',
        display: 'block',
    },
    right: {
        padding: '15px 0',
        margin: '0',
        float: 'right',
    },
    icon: {
        width: '18px',
        height: '18px',
        top: '3px',
        position: 'relative',
    },
    sectionTextTitle: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '700',
        marginTop: '30px',
        marginBottom: '30px',
        minHeight: '32px',
        fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        opacity: '.6',
    },
    profileInfoContent: {
        color: '#fff',
        marginBottom: '20px',
        // textDecoration: 'none',
        // fontWeight: '700',
        // marginTop: '30px',
        // marginBottom: '30px',
        // minHeight: '32px',
        // fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        // opacity: '.6',
    },
  profileInfoContentAdd: {
    opacity: .7,
    textDecoration: 'underline',
    }
};

export default blogPostsPageStyle;

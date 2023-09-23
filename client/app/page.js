import ActionIconButton  from './components/Atoms/ActionIconButton'
import CircleImageWithTextInput from './components/Molecules/CircleImageWithTextInput';
import CircleImageWithTitle from './components/Molecules/CircleImageWithTitle';
import CircleImage from './components/Atoms/CircleImage';
import HomeIcon from '@mui/icons-material/Home';
import IconNavigation from './components/Molecules/IconNavigation';
import ListItemWithImageAndText from './components/Molecules/ListItemWithImageAndText';
import NavigationIconLink from './components/Atoms/NavigationIconLink/NavigationIconLink';
import PostInteractionCluster from './components/Molecules/PostInteractionCluster';
import styles from './page.module.css'
import TextInput from './components/Atoms/TextInput';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import UserCommentWithImage from './components/Molecules/UserCommentWithImage';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Atoms</h1>
      
      <TextInput variant="newPost" />
      
      <ActionIconButton buttonText="Like" ><ThumbUpAltIcon /></ActionIconButton>
      
      <CircleImage src="https://images.unsplash.com/photo-1611615748492-99a6ad27548a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="francesca Zama selfie" isOnline={false}  onImageClickDestination=""/>
      
      <NavigationIconLink navLinkDestination="" ><ThumbUpAltIcon alt="test"/></NavigationIconLink>
      <h2>Molecules</h2>
      
      <CircleImageWithTextInput
        inputVariant="search"
        imageSrc="https://cdn.iconscout.com/icon/free/png-256/facebook-224-498412.png"
        imageAlt="fb"
        onImageClickDestination="/home"
      />
      
      <CircleImageWithTitle
        imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
        imageAlt="authenticated user"
        imageClick="/"
        title="Blaine"
      />
      
      <IconNavigation />
      
      <ListItemWithImageAndText action={null} text="Home" key="1">
        <HomeIcon fontSize="large" />
			</ListItemWithImageAndText>
      
      <PostInteractionCluster
        addLikeToPost={null}
        openCommentsForPost={null}
        sharePost={null}
        numberOfPostLikes="10"
        numberOfPostComments="2"
        numberOfPostShares="1"
      />
      
      <UserCommentWithImage
						authorName="Blaine"
						authorComment="Hello World"
						navLinkDestination="/"
						timePosted={null}
					>
						  <CircleImage src="https://images.unsplash.com/photo-1611615748492-99a6ad27548a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="francesca Zama selfie" isOnline={false}  onImageClickDestination=""/>
      
      </UserCommentWithImage>
      
    </main>
  )
}

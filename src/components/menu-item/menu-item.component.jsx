import { withRouter } from 'react-router';
import './menu-items.styles.scss'

const MenuItem = ({ size, history, title, imageUrl, match, linkUrl }) =>
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <h3 className="subtitle">SHOP NOW</h3>
        </div>
    </div>

export default withRouter(MenuItem);
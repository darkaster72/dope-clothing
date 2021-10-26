import './menu-items.styles.scss'

const MenuItem = (props) => <div className={`${props.size} menu-item`}>
    <div className="background-image" style={{
        backgroundImage: `url(${props.imageUrl})`
    }}></div>
    <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <h3 className="subtitle">SHOP NOW</h3>
    </div>
</div>

export default MenuItem;
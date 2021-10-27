import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collecion-preview'>
        <h1 className="title">{title}</h1>
        <div className='preview'>
            {items
                .filter(item => item.id <= 4)
                .map(({ id, ...otherProps }) => (
                    <CollectionItem key={id} {...otherProps} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
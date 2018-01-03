import {List, ListItem} from 'react-native-elements'
import React from 'react'


export default ItemsList = ({list, itemSelected}) => {

    return (
        <List>
            {
                list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{name: item.icon || 'av-timer'}}
                        onPress={() => {
                            itemSelected(item)
                        }}
                    />
                ))
            }
        </List>
    )

}
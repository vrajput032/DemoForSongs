import React, { ReactElement, useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text, Image, RefreshControl } from 'react-native'
import Loader from './Loader'

interface SongsProps {

}

export const SongsListing: React.FC = (SongsProps) => {

    const [isLoading, setIsLoad] = useState<boolean>(false)
    const [songsDataArray, setSongsData] = useState<Array<any>>([])

    useEffect(() => {
        apiForSongs()
    }, []);
    

    const apiForSongs = () => {
        setIsLoad(true)
        fetch('https://itunes.apple.com/search?term=Michael+jackson')
            .then((response) => response.json())
            .then((json) => {
                setSongsData(json.results)
                setIsLoad(false)
            })
            .catch((error) => {
                console.error(error)
                setIsLoad(false)
            });
    }

    const renderSongs = (rowData: any) => {
        let { item, index } = rowData;
        return (
            <View style={styles.flatItemContainer}>
                <Image source={{ uri: item.artworkUrl60 }} style={styles.imageStyle} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{}}>{item.trackName}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{}}>{'Duration : '}</Text>
                        <Text style={{}}>{item.trackTimeMillis}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Text style={styles.headerText}>Songs</Text>
            </View>
            <FlatList
                style={styles.flatListStyle}
                contentContainerStyle={{ paddingBottom: 20 }}
                data={songsDataArray}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={apiForSongs} />}
                renderItem={renderSongs}
                keyExtractor={(item) => item.trackId.toString()}
            />
            <Loader isLoading={isLoading} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerStyle: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10%'
    },
    flatItemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle: {
        height: 80,
        width: 80,
        marginLeft: 20,
        marginTop: 20
    },
    headerText: {
        fontSize: 25,
        marginTop: 20
    },
    flatListStyle: {

    }
})


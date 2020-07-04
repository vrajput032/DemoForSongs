import React, { PureComponent, Fragment } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';


interface Props {
    isLoading: boolean;
}

export default class Loader extends PureComponent<Props>  {

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.isLoading &&
                    <View style={Styles.container}>
                        {
                            <Fragment>
                                <ActivityIndicator size={'large'} color={'red'} ></ActivityIndicator>
                                <Text>Please Wait</Text>
                            </Fragment>

                        }

                    </View>
                }
            </Fragment>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'white',
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    spinner: {
        marginBottom: 50
    },
})
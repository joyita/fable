import React, {Component} from 'react';
import {
    LayoutAnimation,
    UIManager,
    Text,
    Platform,
} from 'react-native';

import {Button} from "./Button";
import Icon from 'react-native-vector-icons/Ionicons';
import { Notifications } from 'react-native-notifications';
import {connect} from "react-redux";
import * as auth_actions from "../../signup/actions/auth_actions";
import {TextStyles} from "../styles/TextStyles";
//var PushNotification = require('react-native-push-notification');

class NotificationsAngel extends Component {

    componentDidUpdate(nextProps) {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    constructor() {
        super();
    }

    onPushRegistered(deviceToken) {
        this.props.setNotificationToken(deviceToken);
        console.log("Device Token Received", deviceToken);
    }

    onPushRegistrationFailed(error) {
        // For example:
        //
        // error={
        //   domain: 'NSCocoaErroDomain',
        //   code: 3010,
        //   localizedDescription: 'remote notifications are not supported in the simulator'
        // }
        console.error(error);
    }

    componentWillUnmount() {
        // prevent memory leaks!
        // try {
        //     NotificationsIOS.removeEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
        //     NotificationsIOS.removeEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
        // } catch (err) {
        //
        // }
    }

    async askPermission() {
        // let result = await this.props.setNotificationTokenToken('hgfhgf');

        if(Platform.OS === 'android') {
            NotificationsAndroid.refreshToken();
            NotificationsAndroid.setRegistrationTokenUpdateListener((deviceToken) => {
                console.log('Push-notifications registered on device!', deviceToken)
                this.props.setNotificationToken(deviceToken);
                console.log("Device Token Received by server", deviceToken);
            });
        } else {


            NotificationsIOS.addEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
            NotificationsIOS.addEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
            NotificationsIOS.requestPermissions();
        }
        // let PushNotification = require('react-native-push-notification');
        // PushNotification.configure({
        //
        //     // (optional) Called when Token is generated (iOS and Android)
        //     onRegister: function(token) {
        //         console.log( 'TOKEN:', token );
        //     },
        //
        //     // (required) Called when a remote or local notification is opened or received
        //     onNotification: function(notification) {
        //         console.log( 'NOTIFICATION:', notification );
        //
        //         // process the notification
        //
        //         // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
        //         notification.finish(PushNotificationIOS.FetchResult.NoData);
        //     },
        //
        //     // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
        //     senderID: "148091674727",
        //
        //     // IOS ONLY (optional): default: all - Permissions to register.
        //     permissions: {
        //         alert: true,
        //         badge: true,
        //         sound: true
        //     },
        //
        //     // Should the initial notification be popped automatically
        //     // default: true
        //     popInitialNotification: true,
        //
        //     /**
        //      * (optional) default: true
        //      * - Specified if permissions (ios) and token (android and ios) will requested or not,
        //      * - if not, you must call PushNotificationsHandler.requestPermissions() later
        //      */
        //     requestPermissions: true,
        // });

    }

    async askPermission2() {
        Notifications.registerRemoteNotifications();

        Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
            // TODO: Send the token to my server so it could send back push notifications...
            console.log("Device Token Received", event.deviceToken);
            this.props.setNotificationToken(event.deviceToken);
        });
        Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {
            console.error(event);
        });
    }
    render() {
        return (
            <Button styles={styles.notifications} valid onPress={e => this.askPermission2(e)}>
                <Icon style={styles.icon} name={'notifications'} size={20} color={'#ffffff'} />
                <Text style={styles.text}>  Add notifications</Text>
            </Button>

        )
    }

}

const styles = {
    radios: {
        flex:1,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around',
        paddingBottom:10
    },
    icon: {
        paddingTop:15,
        fontSize:20
    },
    text: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: TextStyles.fontFamily,
        color: '#fff',
        marginRight:10
    },
    notifications: {
        backgroundColor: '#209975',
        borderColor: '#209975',
        paddingTop:10,
        width: 185
    }
};


function mapStateToProps({auth, profile}) {
    return {...auth, ...profile};
}

export default connect(mapStateToProps, auth_actions)(NotificationsAngel);
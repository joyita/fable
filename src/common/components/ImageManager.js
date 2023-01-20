import React from 'react';
import {Text, View} from 'react-native';

const ImageManager = {
    randomImage() {
        let all = [
            require('../img/photo/fitness/5.jpeg'),
            require('../img/photo/relationships/13.jpeg'),
            require('../img/photo/diet/18.jpg'),
            require('../img/photo/money/4.jpg'),
            require('../img/photo/fitness/8.jpeg'),
            require('../img/photo/relationships/2.jpeg'),
            require('../img/photo/me/4.jpg'),
            require('../img/photo/work/1.jpeg'),
            require('../img/photo/family/7.jpeg'),
            require('../img/photo/diet/11.jpeg')
        ];
        let index = Math.floor(Math.random() * all.length) + 1;
        return all[index];
    },

    assignUniqueImage(category, indices) {
        let picResult = ImageManager.getTrackedAngelPic(category, indices);
        //content.image = picResult.pic;
        indices.push(picResult.index);
        return picResult.pic;
    },

    getTrackedAngelPic(category, existingStack) {
        let pics = categoryPics[category];
        if (pics === undefined) {
            pics = categoryPics['undefined'];
        }

        if (existingStack === undefined) {
            existingStack = [];
        }
        let unusedPicIndices = [];
        for (let i = 0; i < pics.length; i++) {
            if (existingStack.indexOf(i) === -1) {
                unusedPicIndices.push(i);
            }
        }
        if(unusedPicIndices.length === 0) {
            for (let i = 0; i < pics.length; i++) {
                unusedPicIndices.push(i);
            }
        }
        let randomIndex = Math.floor((Math.random() * unusedPicIndices.length));
        let random = unusedPicIndices[randomIndex];
        return {
            pic: pics[random],
            index: random
        };
        // return pics[random];
    },

    getAngelPic(category, existingStack) {
        let pics = categoryPics[category];
        if (pics === undefined) {
            pics = categoryPics['undefined'];
        }

        if (existingStack === undefined) {
            existingStack = [];
        }
        let unusedPicIndices = [];
        for (let i = 0; i < pics.length; i++) {
            if (existingStack.indexOf(i) === -1) {
                unusedPicIndices.push(i);
            }
        }
        let random = Math.floor((Math.random() * unusedPicIndices.length));
        return pics[random];
    },

    getCategoryPic(category) {
        switch (category) {
            case 'Diet':
                return require('../img/photo/diet/18.jpg');
            case 'Fitness':
                return require('../img/photo/fitness/5.jpeg');
            case 'Work':
                return require('../img/photo/work/1.jpeg');
            case 'Me':
                return require('../img/photo/me/4.jpg');
            case 'Family':
                return require('../img/photo/social/8.jpg');
            case 'Love':
                return require('../img/photo/relationships/2.jpeg');
            case 'Social':
                return require('../img/photo/relationships/13.jpeg');
            case 'Money':
                return require('../img/photo/money/4.jpg');
            case 'Culture':
                return require('../img/photo/family/7.jpeg');
            case 'Hobbies':
                return require('../img/photo/diet/11.jpeg');
            case 'Misc':
                return require('../img/photo/culture/13.jpg');
            default:
                return ImageManager.randomImage();

        }

    }

};
let categoryPics = {
    "Diet": [
        require('../img/photo/diet/1.jpg'),
        require('../img/photo/diet/2.jpg'),
        require('../img/photo/diet/3.jpg'),
        require('../img/photo/diet/4.jpg'),
        require('../img/photo/diet/5.jpg'),
        require('../img/photo/diet/6.jpg'),
        require('../img/photo/diet/7.jpg'),
        require('../img/photo/diet/8.jpg'),
        require('../img/photo/diet/9.jpeg'),
        require('../img/photo/diet/10.jpeg'),
        require('../img/photo/diet/11.jpeg'),
        require('../img/photo/diet/12.jpeg'),
        require('../img/photo/diet/13.jpeg'),
        require('../img/photo/diet/14.jpeg'),
        require('../img/photo/diet/15.jpeg'),
        require('../img/photo/diet/16.jpeg'),
        require('../img/photo/diet/17.jpeg')
    ],
    "Fitness": [
        require('../img/photo/fitness/1.jpg'),
        require('../img/photo/fitness/2.jpg'),
        require('../img/photo/fitness/3.jpg'),
        require('../img/photo/fitness/4.jpg'),
        require('../img/photo/fitness/5.jpeg'),
        require('../img/photo/fitness/7.jpeg'),
        require('../img/photo/fitness/8.jpeg'),
        require('../img/photo/fitness/9.jpeg'),
        require('../img/photo/fitness/10.jpeg'),
        require('../img/photo/fitness/11.jpg'),
        require('../img/photo/fitness/12.jpeg'),
        require('../img/photo/fitness/13.jpeg')
    ],
    "Work": [
        require('../img/photo/work/1.jpeg'),
        require('../img/photo/work/2.jpg'),
        require('../img/photo/work/4.jpg'),
        require('../img/photo/work/5.jpg'),
        require('../img/photo/work/6.jpg'),
        require('../img/photo/work/7.jpeg'),
        require('../img/photo/work/8.jpg'),
        require('../img/photo/work/9.jpeg'),
        require('../img/photo/work/10.jpeg'),
        require('../img/photo/work/11.jpeg'),
        require('../img/photo/work/12.jpg'),
        require('../img/photo/work/13.jpg'),
        require('../img/photo/work/14.jpeg'),
        require('../img/photo/work/15.jpeg')
    ],
    "Me": [
        require('../img/photo/me/1.jpeg'),
        require('../img/photo/me/2.jpg'),
        require('../img/photo/me/3.jpg'),
        require('../img/photo/me/4.jpg'),
        require('../img/photo/me/5.jpeg'),
        require('../img/photo/me/6.jpeg'),
        require('../img/photo/me/7.jpeg'),
        require('../img/photo/me/8.jpeg'),
        require('../img/photo/me/9.jpg'),
        require('../img/photo/me/10.jpg'),
        require('../img/photo/me/11.jpg'),
        require('../img/photo/me/12.jpeg'),
    ],
    "Family": [
        require('../img/photo/family/1.jpeg'),
        require('../img/photo/family/2.jpg'),
        require('../img/photo/family/3.jpeg'),
        require('../img/photo/family/4.jpeg'),
        require('../img/photo/family/5.jpeg'),
        require('../img/photo/family/6.jpeg'),
        require('../img/photo/family/7.jpeg'),
        require('../img/photo/family/8.jpeg'),
        require('../img/photo/family/9.jpg'),
        require('../img/photo/family/10.jpg'),
        require('../img/photo/family/11.jpg'),
        require('../img/photo/family/12.jpg'),
    ],
    "Relationships": [
        require('../img/photo/relationships/1.jpeg'),
        require('../img/photo/relationships/2.jpeg'),
        require('../img/photo/relationships/3.jpeg'),
        require('../img/photo/relationships/4.jpeg'),
        require('../img/photo/relationships/5.jpeg'),
        require('../img/photo/relationships/6.jpeg'),
        require('../img/photo/relationships/7.jpg'),
        require('../img/photo/relationships/8.jpg'),
        require('../img/photo/relationships/9.jpg'),
        require('../img/photo/relationships/10.jpeg'),
        require('../img/photo/relationships/11.jpg'),
        require('../img/photo/relationships/12.jpg'),
        require('../img/photo/relationships/13.jpeg'),
        require('../img/photo/relationships/14.jpg'),
    ],
    "Love": [
        require('../img/photo/relationships/1.jpeg'),
        require('../img/photo/relationships/2.jpeg'),
        require('../img/photo/relationships/3.jpeg'),
        require('../img/photo/relationships/4.jpeg'),
        require('../img/photo/relationships/5.jpeg'),
        require('../img/photo/relationships/6.jpeg'),
        require('../img/photo/relationships/7.jpg'),
        require('../img/photo/relationships/8.jpg'),
        require('../img/photo/relationships/9.jpg'),
        require('../img/photo/relationships/10.jpeg'),
        require('../img/photo/relationships/11.jpg'),
        require('../img/photo/relationships/12.jpg'),
        require('../img/photo/relationships/13.jpeg'),
        require('../img/photo/relationships/14.jpg'),
    ],
    "Social": [
        require('../img/photo/social/1.jpeg'),
        require('../img/photo/social/2.jpeg'),
        require('../img/photo/social/3.jpeg'),
        require('../img/photo/social/5.jpeg'),
        require('../img/photo/social/6.jpeg'),
        require('../img/photo/social/7.jpeg'),
        require('../img/photo/social/8.jpg'),
        require('../img/photo/social/9.jpeg'),
        require('../img/photo/social/10.jpeg'),
        require('../img/photo/social/11.jpeg'),
        require('../img/photo/social/12.jpg'),
        require('../img/photo/social/13.jpeg'),
        require('../img/photo/social/14.jpg')
    ],
    "Money": [
        require('../img/photo/money/1.jpg'),
        require('../img/photo/money/2.jpg'),
        require('../img/photo/money/3.jpg'),
        require('../img/photo/money/4.jpg'),
        require('../img/photo/money/5.jpg'),
        require('../img/photo/money/6.jpeg'),
        require('../img/photo/money/7.jpeg'),
        require('../img/photo/money/8.jpeg'),
        require('../img/photo/money/9.jpg'),
        require('../img/photo/money/10.jpg'),
        require('../img/photo/money/11.jpg'),
        require('../img/photo/money/12.jpg'),
        require('../img/photo/money/13.jpg'),
        require('../img/photo/money/14.jpg'),
        require('../img/photo/money/15.jpg')
    ],
    "Culture": [
        require('../img/photo/culture/1.jpg'),
        require('../img/photo/culture/2.jpg'),
        require('../img/photo/culture/3.jpg'),
        require('../img/photo/culture/4.jpeg'),
        require('../img/photo/culture/5.jpeg'),
        require('../img/photo/culture/6.jpeg'),
        require('../img/photo/culture/7.jpg'),
        require('../img/photo/culture/8.jpeg'),
        require('../img/photo/culture/9.jpeg'),
        require('../img/photo/culture/10.jpeg'),
        require('../img/photo/culture/11.jpeg'),
        require('../img/photo/culture/12.jpeg'),
        require('../img/photo/culture/13.jpg')
    ],
    "Skills": [
        require('../img/photo/hobbies/1.jpg'),
        require('../img/photo/hobbies/2.jpg'),
        require('../img/photo/hobbies/3.jpg'),
        require('../img/photo/hobbies/4.jpg'),
        require('../img/photo/hobbies/5.jpg'),
        require('../img/photo/hobbies/6.jpg'),
        require('../img/photo/hobbies/7.jpg'),
        require('../img/photo/hobbies/8.jpeg'),
        require('../img/photo/hobbies/9.jpeg'),
        require('../img/photo/hobbies/10.jpeg'),
        require('../img/photo/hobbies/11.jpeg'),
        require('../img/photo/hobbies/12.jpg'),
        require('../img/photo/hobbies/13.jpg'),
        require('../img/photo/hobbies/14.jpg'),
        require('../img/photo/hobbies/15.jpg'),
    ],
    "Hobbies": [
        require('../img/photo/hobbies/1.jpg'),
        require('../img/photo/hobbies/2.jpg'),
        require('../img/photo/hobbies/3.jpg'),
        require('../img/photo/hobbies/4.jpg'),
        require('../img/photo/hobbies/5.jpg'),
        require('../img/photo/hobbies/6.jpg'),
        require('../img/photo/hobbies/7.jpg'),
        require('../img/photo/hobbies/8.jpeg'),
        require('../img/photo/hobbies/9.jpeg'),
        require('../img/photo/hobbies/10.jpeg'),
        require('../img/photo/hobbies/11.jpeg'),
        require('../img/photo/hobbies/12.jpg'),
        require('../img/photo/hobbies/13.jpg'),
        require('../img/photo/hobbies/14.jpg'),
        require('../img/photo/hobbies/15.jpg'),
    ],
    "undefined": [
        require('../img/photo/hobbies/1.jpg'),
        require('../img/photo/culture/1.jpg'),
        require('../img/photo/work/15.jpeg'),
        require('../img/photo/diet/15.jpeg')
    ]

}

export {ImageManager};
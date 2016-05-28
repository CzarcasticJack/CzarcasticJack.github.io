app.controller("gPlusCtrl", function($scope) {
$scope.title = "gPlus Template"
$scope.posts = [
    {
        user: 'Josh',
        userPic: 'https://placehold.it/46x46',
        date: 'Shared Publically - May 27, 2016',
        body: 'Integer maximus purus id feugiat lacinia. Fusce pulvinar urna velit, maximus pulvinar quam aliquet sed. Donec vehicula lectus risus, sed vestibulum ante aliquam id. Sed at consequat diam. Nam lacinia tellus mauris, et accumsan nisl posuere ut. Nunc dictum massa eget ligula egestas, nec finibus velit facilisis. Phasellus eget magna ac mi tristique malesuada.',
        pluses: 1,
        shares: 2,
        commentUser: 'Kara',
        commentUserPic: 'https://placehold.it/28x28', 
        commentDate: 'May 28, 2016',
        commentBody: 'Vestibulum felis lacus, egestas non lacus ac, hendrerit accumsan arcu. Donec nec justo quam. Sed nec nunc justo. Curabitur lobortis dui non dui finibus, vitae ultricies sapien ornare. Nam pellentesque quis mi at bibendum. Maecenas sagittis, purus a convallis sollicitudin, felis quam ullamcorper sem, vel dictum sapien sapien id velit. Aenean nec eros eget libero vehicula ornare et quis nunc. Nulla facilisi.',
    },
    {
        user: 'Josh',
        userPic: 'https://placehold.it/46x46',
        date: 'Shared Publically - May 26, 2016',
        body: 'Cras lobortis rhoncus enim elementum feugiat. Donec ut hendrerit tortor. Fusce ornare quis nisi et ornare. Curabitur sit amet turpis nisl. Donec quam libero, iaculis at viverra in, venenatis eget velit. Nam quis nibh sagittis, semper odio vitae, laoreet sapien. Praesent cursus viverra ullamcorper. Donec tincidunt accumsan nisi sed ultrices. Nunc egestas mauris ullamcorper, tempus elit pulvinar, iaculis elit. Integer nisl mi, mattis nec neque non, varius convallis lacus.',
        pluses: 3,
        shares: 4,
        commentUser: 'Bob',
        commentUserPic: 'https://placehold.it/28x28', 
        commentDate: 'May 27, 2016',
        commentBody: 'Nullam augue magna, euismod in odio a, aliquam condimentum ligula. Praesent porttitor enim eget tempor efficitur. Duis ligula odio, volutpat a malesuada ac, tincidunt eu risus.',
    },
    {
        user: 'Josh',
        userPic: 'https://placehold.it/46x46',
        date: 'Shared Publically - May 25, 2016',
        body: 'Donec risus ipsum, interdum sit amet quam a, consectetur tincidunt mauris. Sed vehicula commodo tristique. Aliquam tempor sem felis, nec rutrum lectus tincidunt in. Fusce sed lorem cursus, malesuada nisi sit amet, bibendum sapien.',
        pluses: 5,
        shares: 6,
        commentUser: 'Joe',
        commentUserPic: 'https://placehold.it/28x28', 
        commentDate: 'May 26, 2016',
        commentBody: 'Vivamus imperdiet ornare tellus, at pharetra quam laoreet rutrum. Integer ac nisi ut magna hendrerit hendrerit tincidunt eu ipsum.',
    },
    {
        user: 'Josh',
        userPic: 'https://placehold.it/46x46',
        date: 'Shared Publically - May 24, 2016',
        body: 'Pellentesque nisl libero, bibendum in quam sed, bibendum dignissim nulla. Donec facilisis metus sit amet pharetra porttitor. Proin pharetra eros et erat finibus, vel suscipit nunc elementum. Ut ac fringilla justo, eget eleifend neque. Pellentesque nunc eros, feugiat sed efficitur id, finibus at mauris.',
        pluses: 7,
        shares: 8,
        commentUser: 'Susan',
        commentUserPic: 'https://placehold.it/28x28', 
        commentDate: 'May 25, 2016',
        commentBody: 'Nunc finibus finibus iaculis. Proin pretium vel nibh a tempor. Praesent velit eros, gravida id iaculis at, lobortis id sem. In semper lectus eu sapien consequat molestie.',
    },
    {
        user: 'Josh',
        userPic: 'https://placehold.it/46x46',
        date: 'Shared Publically - May 23, 2016',
        body: 'I Morbi et neque urna. Suspendisse potenti. Nullam posuere tempor velit, ut vestibulum lectus malesuada a. Etiam sed tincidunt elit. Quisque ut sapien vitae neque consequat faucibus.',
        pluses: 8,
        shares: 9,
        commentUser: 'Tony',
        commentUserPic: 'https://placehold.it/28x28', 
        commentDate: 'May 24, 2016',
        commentBody: 'Nam elit velit, fermentum at iaculis vitae, varius ut nibh. Phasellus vehicula convallis metus, at pharetra arcu mollis quis. Duis sed ligula at nunc sodales dictum.',
    },
    {
        user: 'Josh',
        userPic: 'https://placehold.it/46x46',
        date: 'Shared Publically - May 22, 2016',
        body: 'Fusce et malesuada tellus. Duis molestie nunc id arcu mollis, vitae tempus lorem ultricies.',
        pluses: 10,
        shares: 11,
        commentUser: 'Natasha',
        commentUserPic: 'https://placehold.it/28x28', 
        commentDate: 'May 23, 2016',
        commentBody: 'Pellentesque faucibus pharetra nisl, in ornare augue dapibus ac. Duis sed gravida felis, sed gravida magna. Mauris auctor tristique pretium. Cras sodales urna nec sem tempor auctor. Aliquam vel orci at dolor ultricies consectetur. Vivamus non blandit erat.',
    },
    {
        user: 'Josh',
        userPic: 'https://placehold.it/46x46',
        date: 'Shared Publically - May 21, 2016',
        body: 'Nullam metus risus, posuere eget justo eget, faucibus facilisis neque. Vivamus vel neque purus. Suspendisse consectetur lectus eu pulvinar luctus.',
        pluses: 12,
        shares: 13,
        commentUser: 'Steve',
        commentUserPic: 'https://placehold.it/28x28', 
        commentDate: 'May 22, 2016',
        commentBody: 'Sed et magna at sem pulvinar laoreet sed ac metus.',
    }]
    });

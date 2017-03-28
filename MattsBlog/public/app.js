(function () {
    angular
        .module("BlogApp", [])
        .controller("BlogController", BlogController);

    function BlogController($scope, $http) {
        $scope.createPost = createPost;
        $scope.deletePost = deletePost;
        $scope.editPost = editPost;
        $scope.updatePost = updatePost;

        function init() {
            getAllPosts();
        }
        init();

        //Update controller function
        function updatePost(post) {
            $http
                .put("/api/blogpost/" + post._id, post)
                .success(getAllPosts);
        }

        //Edit controller function 
        function editPost(postId) {
            $http
                .get("/api/blogpost/"+postId)
                .success(function (post) {
                    $scope.post = post;
                });
        }

        //Delete controller function
        function deletePost(postId) {
            $http
                .delete("/api/blogpost/"+postId)
                .success(getAllPosts);
        }

        //Controller function for displaying all of the posts
        function getAllPosts() {
            $http
                .get("/api/blogpost")
                .success(function(posts){
                    $scope.posts = posts;
                });
        }

        //Controller function for creating a post
        function createPost(post) {
            console.log(post);
            $http
                .post("/api/blogpost", post)
                .success(getAllPosts);
        }
    }

      
})();
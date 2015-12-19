import Ember from 'ember';

export default Ember.Route.extend({
   model: function(params){
      console.log(`params.subreddit = ${params.subreddit}`);
      return Ember.$.getJSON(`https://www.reddit.com/r/${params.subreddit}.json`);
    },
    afterModel: function(r){
        r.subreddit = r.data.children[0].data.subreddit || '';
        console.log("r.subreddit = ", r.subreddit);
        console.log(r);
    }
});

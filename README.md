# Ember-a11y-loading-focus-issue

When drilling down from '/' into '/foo/bar', the 'foo/loading.hbs` template gets focused, but `foo/bar.hbs never does.

1. Start ember server
2. Go to '/'
3. Click on "Foo", observe that both the loading state and the foo template receive focus
4. Go back to '/'
5. Click on "Bar"
6. Observe that the foo loading template receives focus, but the bar template never does

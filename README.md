# core-ajax-imgur
Polymer component that extends core-ajax and provides an easier access to the info of an imgur image.

### Installing  
  
- Get it from bower:   
```bower install core-ajax-imgur```  
- Import it in your project:   
```<link rel="import" href="bower_components/core-ajax-imgur/core-ajax-imgur.html">```

### Usage
```
<core-ajax-imgur
  imgId="{{imgId}}"
  clientId="{{clientId}}"
  on-core-response="{{handleResponse}}">
</core-ajax-imgur>
```

To use core-ajax-imgur you must provide it with:
  - **clientId**: A valid imgur client ID (read more about it <a href="https://api.imgur.com/">here</a>); 
  - **imgId**: A valid link to an image hosted on imgur. 
    
  
Being an extension of core-ajax means that every standard code-ajax attribute can also be declared.  
Take a look at the <a href="https://www.polymer-project.org/0.5/docs/elements/core-ajax.html">core-ajax component page</a> for more informations.
  
> **Note:**
> The following pattern for the image link can be used:
> - Direct URL, ex: http://i.imgur.com/NPHdTZl.jpg
> - Short URL, ex: http://imgur.com/zqLZYZr
> - Album URL, ex: http://imgur.com/a/szz8j 
> - Gallery URL, ex: http://imgur.com/gallery/Nubk9vB


### Demo
<a href="http://mazzarolomatteo.com/polymer/core-ajax-imgur-demo/">Demo</a>  
<a href="">Source of the demo on GitHub</a>
  

### Contacts
Email: Mazzarolomatteo@gmail.com

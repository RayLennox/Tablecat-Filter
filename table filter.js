var filt=/name|tripcode|comment|thread_topic /gim;

var posts = document.getElementsByClassName('post');


		for (i=0;i<posts.length;i++) {
		if (posts[i].innerHTML.search(filt)!=-1)  {
				posts[i].style.display="none";
				
				}
			}


var threads = document.getElementsByClassName('subject');

var threadlist = document.getElementsByClassName('thread');

for (i=0;i<threads.length;i++) {
		if (threads[i].innerHTML.search(filt)!=-1)  {
				threads[i].style.display="none";
				// hide thread in threadlist
				threadlist[i].style.display='none';
				//hide entire thread
				threads[i].parentNode.parentNode.style.display='none';
				}
			}
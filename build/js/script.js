const tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";const firstScriptTag=document.getElementsByTagName("script")[0];let player1,player2,player3;function onYouTubeIframeAPIReady(){player1=new YT.Player("player1",{playerVars:{controls:0,fs:0,disablekb:1,iv_load_policy:3,loop:1,playlist:"W0LHTWG-UmQ",modestbranding:1,rel:0,showinfo:0},videoId:"W0LHTWG-UmQ",events:{onReady:onPlayerReady}}),player2=new YT.Player("player2",{playerVars:{controls:0,fs:0,disablekb:1,iv_load_policy:3,loop:1,playlist:"X8Z8okhkjv8",modestbranding:1,showinfo:0,rel:0},videoId:"X8Z8okhkjv8",events:{onReady:onPlayerReady}}),player3=new YT.Player("player3",{playerVars:{controls:0,fs:0,disablekb:1,iv_load_policy:3,loop:1,playlist:"M7lc1UVf-VE",modestbranding:1,showinfo:0,rel:0},videoId:"M7lc1UVf-VE",events:{onReady:onPlayerReady}})}function onPlayerReady(e){e.target.playVideo(),e.target.mute()}function stopVideo(){player.stopVideo()}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJ0YWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGxheWVyMSIsInBsYXllcjIiLCJwbGF5ZXIzIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJZVCIsIlBsYXllciIsInBsYXllclZhcnMiLCJjb250cm9scyIsImZzIiwiZGlzYWJsZWtiIiwiaXZfbG9hZF9wb2xpY3kiLCJsb29wIiwicGxheWxpc3QiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwidmlkZW9JZCIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblBsYXllclJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJwbGF5VmlkZW8iLCJtdXRlIiwic3RvcFZpZGVvIiwicGxheWVyIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBTUMsU0FBU0MsY0FBYyxVQUNuQ0YsSUFBSUcsSUFBTSxxQ0FFVixNQUFNQyxlQUFpQkgsU0FBU0kscUJBQXFCLFVBQVUsR0FHL0QsSUFBSUMsUUFBU0MsUUFBU0MsUUFFdEIsU0FBU0MsMEJBQ0xILFFBQVUsSUFBSUksR0FBR0MsT0FBTyxVQUFXLENBQy9CQyxXQUFZLENBQ1JDLFNBQVksRUFDWkMsR0FBTSxFQUNOQyxVQUFhLEVBQ2JDLGVBQWtCLEVBQ2xCQyxLQUFRLEVBQ1JDLFNBQVksY0FDWkMsZUFBa0IsRUFDbEJDLElBQU8sRUFDUEMsU0FBWSxHQUVoQkMsUUFBUyxjQUNUQyxPQUFRLENBQ0pDLFFBQVdDLGlCQUduQmxCLFFBQVUsSUFBSUcsR0FBR0MsT0FBTyxVQUFXLENBQy9CQyxXQUFZLENBQ1JDLFNBQVksRUFDWkMsR0FBTSxFQUNOQyxVQUFhLEVBQ2JDLGVBQWtCLEVBQ2xCQyxLQUFRLEVBQ1JDLFNBQVksY0FDWkMsZUFBa0IsRUFDbEJFLFNBQVksRUFDWkQsSUFBTyxHQUVYRSxRQUFTLGNBQ1RDLE9BQVEsQ0FDSkMsUUFBV0MsaUJBR25CakIsUUFBVSxJQUFJRSxHQUFHQyxPQUFPLFVBQVcsQ0FDL0JDLFdBQVksQ0FDUkMsU0FBWSxFQUNaQyxHQUFNLEVBQ05DLFVBQWEsRUFDYkMsZUFBa0IsRUFDbEJDLEtBQVEsRUFDUkMsU0FBWSxjQUNaQyxlQUFrQixFQUNsQkUsU0FBWSxFQUNaRCxJQUFPLEdBRVhFLFFBQVMsY0FDVEMsT0FBUSxDQUNKQyxRQUFXQyxpQkFLdkIsU0FBU0EsY0FBY0MsR0FDbkJBLEVBQU1DLE9BQU9DLFlBQ2JGLEVBQU1DLE9BQU9FLE9BR2pCLFNBQVNDLFlBQ0xDLE9BQU9ELFlBaEVYMUIsZUFBZTRCLFdBQVdDLGFBQWFqQyxJQUFLSSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxudGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xyXG5cclxuY29uc3QgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbmZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xyXG5cclxubGV0IHBsYXllcjEsIHBsYXllcjIsIHBsYXllcjM7XHJcblxyXG5mdW5jdGlvbiBvbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpIHtcclxuICAgIHBsYXllcjEgPSBuZXcgWVQuUGxheWVyKCdwbGF5ZXIxJywge1xyXG4gICAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICAgICAgJ2NvbnRyb2xzJzogMCxcclxuICAgICAgICAgICAgJ2ZzJzogMCxcclxuICAgICAgICAgICAgJ2Rpc2FibGVrYic6IDEsXHJcbiAgICAgICAgICAgICdpdl9sb2FkX3BvbGljeSc6IDMsXHJcbiAgICAgICAgICAgICdsb29wJzogMSxcclxuICAgICAgICAgICAgJ3BsYXlsaXN0JzogJ1cwTEhUV0ctVW1RJyxcclxuICAgICAgICAgICAgJ21vZGVzdGJyYW5kaW5nJzogMSxcclxuICAgICAgICAgICAgJ3JlbCc6IDAsXHJcbiAgICAgICAgICAgICdzaG93aW5mbyc6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aWRlb0lkOiAnVzBMSFRXRy1VbVEnLFxyXG4gICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAnb25SZWFkeSc6IG9uUGxheWVyUmVhZHlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHBsYXllcjIgPSBuZXcgWVQuUGxheWVyKCdwbGF5ZXIyJywge1xyXG4gICAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICAgICAgJ2NvbnRyb2xzJzogMCxcclxuICAgICAgICAgICAgJ2ZzJzogMCxcclxuICAgICAgICAgICAgJ2Rpc2FibGVrYic6IDEsXHJcbiAgICAgICAgICAgICdpdl9sb2FkX3BvbGljeSc6IDMsXHJcbiAgICAgICAgICAgICdsb29wJzogMSxcclxuICAgICAgICAgICAgJ3BsYXlsaXN0JzogJ1g4Wjhva2hranY4JyxcclxuICAgICAgICAgICAgJ21vZGVzdGJyYW5kaW5nJzogMSxcclxuICAgICAgICAgICAgJ3Nob3dpbmZvJzogMCxcclxuICAgICAgICAgICAgJ3JlbCc6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpZGVvSWQ6ICdYOFo4b2toa2p2OCcsXHJcbiAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICdvblJlYWR5Jzogb25QbGF5ZXJSZWFkeVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcGxheWVyMyA9IG5ldyBZVC5QbGF5ZXIoJ3BsYXllcjMnLCB7XHJcbiAgICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgICAgICAnY29udHJvbHMnOiAwLFxyXG4gICAgICAgICAgICAnZnMnOiAwLFxyXG4gICAgICAgICAgICAnZGlzYWJsZWtiJzogMSxcclxuICAgICAgICAgICAgJ2l2X2xvYWRfcG9saWN5JzogMyxcclxuICAgICAgICAgICAgJ2xvb3AnOiAxLFxyXG4gICAgICAgICAgICAncGxheWxpc3QnOiAnTTdsYzFVVmYtVkUnLFxyXG4gICAgICAgICAgICAnbW9kZXN0YnJhbmRpbmcnOiAxLFxyXG4gICAgICAgICAgICAnc2hvd2luZm8nOiAwLFxyXG4gICAgICAgICAgICAncmVsJzogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlkZW9JZDogJ003bGMxVVZmLVZFJyxcclxuICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblBsYXllclJlYWR5KGV2ZW50KSB7XHJcbiAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XHJcbiAgICBldmVudC50YXJnZXQubXV0ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wVmlkZW8oKSB7XHJcbiAgICBwbGF5ZXIuc3RvcFZpZGVvKCk7XHJcbn1cclxuIl19

		/****
		 * 小孩走路
		 * @param {[type]} container [description]
		 * */
		 function BoyWalk(){
		 	var container = $("#content");
			//页面可视区域
			var visualWidth = container.width();
			var visualHeight = container.height();

			//获取数据
			var getValue = function(className) {
			var $elem = $('' + className + '');
			//走路的路线坐标
			return {
				height: $elem.height(),
				top: $elem.position().top
				};
			};

			//路的Y轴
			var pathY = function() {
			var data = getValue('.a_background_middle');
			return data.top + data.height/2;
			}();
			var $boy = $('#boy');
			var boyWidth = $boy.width();
			var boyHeight = $boy.height();
			//修正小男孩的正确位置
			$boy.css({
				top: pathY - boyHeight + 25
			});

			//暂停走路
			function pauseWalk() {
				$boy.addClass('pauseWalk');
			}
			//恢复走路
			function restoreWalk(){
				$boy.removeClass('pauseWalk');
			}

			//CSS3的动作变化，小男孩走路
			function slowWalk() {
				$boy.addClass('slowWalk');
			}
			//用transition做运动
			function startRun(options,runTime) {
				var dfdPlay = $.Deferred();
				//恢复走路
				restoreWalk();
				//运动的属性
				$boy.transition(
					options,
					runTime,
					'linear',
					function(){
						dfdPlay.resolve();
					});
				return dfdPlay;
			}
			//开始走路
			function walkRun(time, dist, disY) {
				time = time || 3000;
				//脚动作,动画精灵
				slowWalk();
				//开始走路
				var d1 = startRun({
					'left':dist + 'px',
					'top':disY ? disY : undefined
				},time);
				return d1;
			}
			//计算移动距离
			function calculateDist(direction,proportion) {
				return (direction == 'x' ? visualWidth : visualHeight) *proportion;
			}
			return {
				//开始走路
				walkTo:function(time,proportionX,proportionY) {
					var distX = calculateDist('x',proportionX);
					var distY = calculateDist('y',proportionY);
					return walkRun(time,distX,distY);
				},
				//停止走路
				stopWalk:function(){
					pauseWalk();
				},
				setColor:function(value){
					$boy.css('background-color',value);
				}

			}

		 }

		
		
		//获取第一个子节点
		//var swipe = Swipe(container);
		
		

		
		

		//////////////////////////////////////////////////////
		//================动画处理==========================//
		//////////////////////////////////////////////////////
		
		

		

		

		
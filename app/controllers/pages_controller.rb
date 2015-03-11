class PagesController < ApplicationController
	def index
		@videos = Video.all.order(:title)
	end
end

class UpdateVideos < ActiveRecord::Migration
  def change
  	 rename_column :videos, :url, :vimeoid
  	 add_column :videos, :type, :string
  	 add_column :videos, :subjects, :string
  end
end



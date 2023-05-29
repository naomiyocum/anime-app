class Anime < ApplicationRecord
  validates_presence_of :name, :start_year, :about, :image_url
end

class CreateAnimes < ActiveRecord::Migration[7.0]
  def change
    create_table :animes do |t|
      t.string :name
      t.string :about
      t.string :image_url
      t.integer :start_year

      t.timestamps
    end
  end
end

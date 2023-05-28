class Api::V1::AnimesController < ApplicationController
  before_action :set_anime, only: %i[show update delete]

  def index
    @animes = Anime.all
    render json: @animes
  end

  def show
    render json: @anime
  end

  def create
    @anime = Anime.new(anime_params)

    if @anime.save
      render json: @anime, status: :created
    else
      render json: @anime.errors, status: :unprocessable_entity
    end
  end

  def update
    if @anime.update(anime_params)
      render json: @anime
    else
      render json: @anime.errors, status: :unprocessable_entity
    end
  end

  def delete
    @anime.destroy
    render json: {notice: "Successfully deleted anime"}
  end

  private

  def set_anime
    @anime = Anime.find(params[:id])
  end

  def anime_params
    params.permit(:name, :about, :image_url)
  end
end

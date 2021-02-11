class CategoriesController < ApplicationController
  before_action :set_category, only: [:show ]


  def index
    @category = Category.all

    render json: @category
  end


  def show
    render json: @category, include: :foods
  end


  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    def category_params 
      params.require(:category).permit( :name, :img_url)
    end

end
